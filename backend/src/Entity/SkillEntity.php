<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\SkillEntityRepository")
 */
class SkillEntity
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $details;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\SkillEmployeeEntity", mappedBy="skill")
     */
    private $skillEmployeeEntities;

    public function __construct()
    {
        $this->skillEmployeeEntities = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getDetails(): ?string
    {
        return $this->details;
    }

    public function setDetails(?string $details): self
    {
        $this->details = $details;

        return $this;
    }

    /**
     * @return Collection|SkillEmployeeEntity[]
     */
    public function getSkillEmployeeEntities(): Collection
    {
        return $this->skillEmployeeEntities;
    }

    public function addSkillEmployeeEntity(SkillEmployeeEntity $skillEmployeeEntity): self
    {
        if (!$this->skillEmployeeEntities->contains($skillEmployeeEntity)) {
            $this->skillEmployeeEntities[] = $skillEmployeeEntity;
            $skillEmployeeEntity->setSkill($this);
        }

        return $this;
    }

    public function removeSkillEmployeeEntity(SkillEmployeeEntity $skillEmployeeEntity): self
    {
        if ($this->skillEmployeeEntities->contains($skillEmployeeEntity)) {
            $this->skillEmployeeEntities->removeElement($skillEmployeeEntity);
            // set the owning side to null (unless already changed)
            if ($skillEmployeeEntity->getSkill() === $this) {
                $skillEmployeeEntity->setSkill(null);
            }
        }

        return $this;
    }
}

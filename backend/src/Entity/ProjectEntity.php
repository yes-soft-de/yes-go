<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ProjectEntityRepository")
 */
class ProjectEntity
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=65)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $link;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $publishedDate;

    /**
     * @ORM\Column(type="string", length=45, nullable=true)
     */
    private $workingPeriod;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $details;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ProjectEmployeeEntity", mappedBy="project")
     */
    private $projectsEmployee;

    public function __construct()
    {
        $this->projectsEmployee = new ArrayCollection();
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

    public function getLink(): ?string
    {
        return $this->link;
    }

    public function setLink(string $link): self
    {
        $this->link = $link;

        return $this;
    }

    public function getPublishedDate(): ?\DateTimeInterface
    {
        return $this->publishedDate;
    }

    public function setPublishedDate(?\DateTimeInterface $publishedDate): self
    {
        $this->publishedDate = $publishedDate;

        return $this;
    }

    public function getWorkingPeriod(): ?string
    {
        return $this->workingPeriod;
    }

    public function setWorkingPeriod(?string $workingPeriod): self
    {
        $this->workingPeriod = $workingPeriod;

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
     * @return Collection|ProjectEmployeeEntity[]
     */
    public function getProjectsEmployee(): Collection
    {
        return $this->projectsEmployee;
    }

    public function addProjectsEmployee(ProjectEmployeeEntity $projectsEmployee): self
    {
        if (!$this->projectsEmployee->contains($projectsEmployee)) {
            $this->projectsEmployee[] = $projectsEmployee;
            $projectsEmployee->setProject($this);
        }

        return $this;
    }

    public function removeProjectsEmployee(ProjectEmployeeEntity $projectsEmployee): self
    {
        if ($this->projectsEmployee->contains($projectsEmployee)) {
            $this->projectsEmployee->removeElement($projectsEmployee);
            // set the owning side to null (unless already changed)
            if ($projectsEmployee->getProject() === $this) {
                $projectsEmployee->setProject(null);
            }
        }

        return $this;
    }
}

<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\EmployeeEntityRepository")
 */
class EmployeeEntity
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=45)
     */
    private $fullName;

    /**
     * @ORM\Column(type="string", length=45)
     */
    private $position;

    /**
     * @ORM\Column(type="string", length=65)
     */
    private $language;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $image;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $experiances;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $details;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $isAvaliable;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $facebook;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $twitter;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $linkedin;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $gmail;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $birthDate;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $joiningDate;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\CommentEntity", mappedBy="employee")
     */
    private $employeeComments;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ServiceEmployeeEntity", mappedBy="employee")
     */
    private $employeeServices;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\ProjectEmployeeEntity", mappedBy="employee")
     */
    private $employeeProjects;

    /**
     * @ORM\Column(type="text")
     */
    private $skills;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $isActive;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $rating;

    public function __construct()
    {
        $this->employeeComments = new ArrayCollection();
        $this->employeeServices = new ArrayCollection();
        $this->employeeProjects = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFullName(): ?string
    {
        return $this->fullName;
    }

    public function setFullName(string $fullName): self
    {
        $this->fullName = $fullName;

        return $this;
    }

    public function getPosition(): ?string
    {
        return $this->position;
    }

    public function setPosition(string $position): self
    {
        $this->position = $position;

        return $this;
    }

    public function getLanguage(): ?string
    {
        return $this->language;
    }

    public function setLanguage(string $language): self
    {
        $this->language = $language;

        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(string $image): self
    {
        $this->image = $image;

        return $this;
    }

    public function getExperiances(): ?string
    {
        return $this->experiances;
    }

    public function setExperiances(?string $experiances): self
    {
        $this->experiances = $experiances;

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

    public function getIsAvaliable(): ?int
    {
        return $this->isAvaliable;
    }

    public function setIsAvaliable(?int $isAvaliable): self
    {
        $this->isAvaliable = $isAvaliable;

        return $this;
    }

    public function getFacebook(): ?string
    {
        return $this->facebook;
    }

    public function setFacebook(?string $facebook): self
    {
        $this->facebook = $facebook;

        return $this;
    }

    public function getTwitter(): ?string
    {
        return $this->twitter;
    }

    public function setTwitter(?string $twitter): self
    {
        $this->twitter = $twitter;

        return $this;
    }

    public function getLinkedin(): ?string
    {
        return $this->linkedin;
    }

    public function setLinkedin(?string $linkedin): self
    {
        $this->linkedin = $linkedin;

        return $this;
    }

    public function getGmail(): ?string
    {
        return $this->gmail;
    }

    public function setGmail(?string $gmail): self
    {
        $this->gmail = $gmail;

        return $this;
    }

    public function getBirthDate(): ?\DateTimeInterface
    {
        return $this->birthDate;
    }

    public function setBirthDate(?\DateTimeInterface $birthDate): self
    {
        $this->birthDate = $birthDate;

        return $this;
    }

    public function getJoiningDate(): ?\DateTimeInterface
    {
        return $this->joiningDate;
    }

    public function setJoiningDate(?\DateTimeInterface $joiningDate): self
    {
        $this->joiningDate = $joiningDate;

        return $this;
    }

    /**
     * @return Collection|CommentEntity[]
     */
    public function getEmployeeComments(): Collection
    {
        return $this->employeeComments;
    }

    public function addEmployeeComment(CommentEntity $employeeComment): self
    {
        if (!$this->employeeComments->contains($employeeComment)) {
            $this->employeeComments[] = $employeeComment;
            $employeeComment->setEmployee($this);
        }

        return $this;
    }

    public function removeEmployeeComment(CommentEntity $employeeComment): self
    {
        if ($this->employeeComments->contains($employeeComment)) {
            $this->employeeComments->removeElement($employeeComment);
            // set the owning side to null (unless already changed)
            if ($employeeComment->getEmployee() === $this) {
                $employeeComment->setEmployee(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ServiceEmployeeEntity[]
     */
    public function getEmployeeServices(): Collection
    {
        return $this->employeeServices;
    }

    public function addEmployeeService(ServiceEmployeeEntity $employeeService): self
    {
        if (!$this->employeeServices->contains($employeeService)) {
            $this->employeeServices[] = $employeeService;
            $employeeService->setEmployee($this);
        }

        return $this;
    }

    public function removeEmployeeService(ServiceEmployeeEntity $employeeService): self
    {
        if ($this->employeeServices->contains($employeeService)) {
            $this->employeeServices->removeElement($employeeService);
            // set the owning side to null (unless already changed)
            if ($employeeService->getEmployee() === $this) {
                $employeeService->setEmployee(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|ProjectEmployeeEntity[]
     */
    public function getEmployeeProjects(): Collection
    {
        return $this->employeeProjects;
    }

    public function addEmployeeProject(ProjectEmployeeEntity $employeeProject): self
    {
        if (!$this->employeeProjects->contains($employeeProject)) {
            $this->employeeProjects[] = $employeeProject;
            $employeeProject->setEmployee($this);
        }

        return $this;
    }

    public function removeEmployeeProject(ProjectEmployeeEntity $employeeProject): self
    {
        if ($this->employeeProjects->contains($employeeProject)) {
            $this->employeeProjects->removeElement($employeeProject);
            // set the owning side to null (unless already changed)
            if ($employeeProject->getEmployee() === $this) {
                $employeeProject->setEmployee(null);
            }
        }

        return $this;
    }

    public function getSkills(): ?string
    {
        return $this->skills;
    }

    public function setSkills(string $skills): self
    {
        $this->skills = $skills;

        return $this;
    }

    public function getIsActive(): ?bool
    {
        return $this->isActive;
    }

    public function setIsActive(?bool $isActive): self
    {
        $this->isActive = $isActive;

        return $this;
    }

    public function getRating(): ?int
    {
        return $this->rating;
    }

    public function setRating(?int $rating): self
    {
        $this->rating = $rating;

        return $this;
    }
}
